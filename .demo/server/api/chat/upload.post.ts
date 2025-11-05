import { defineEventHandler, createError, readMultipartFormData } from 'h3'
import { promises as fs } from 'fs'
import { join } from 'path'
import { nanoid } from 'nanoid'

export default defineEventHandler(async (event) => {
  try {
    // خواندن داده‌های multipart/form-data
    const files = await readMultipartFormData(event)
    if (!files || files.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'هیچ فایلی ارسال نشده است',
      })
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf']
    const maxSize = 10 * 1024 * 1024 // 10MB
    const uploadDir = join(process.cwd(), 'public', 'uploads')
    await fs.mkdir(uploadDir, { recursive: true }) // ایجاد دایرکتوری uploads

    const uploadedFiles: { url: string, name: string, type: string }[] = []

    for (const file of files) {
      if (!file.filename || !file.data || !file.type) {
        throw createError({
          statusCode: 400,
          statusMessage: 'داده‌های فایل نامعتبر است',
        })
      }

      // اعتبارسنجی نوع و حجم فایل
      if (!allowedTypes.includes(file.type)) {
        throw createError({
          statusCode: 400,
          statusMessage: `نوع فایل ${file.filename} پشتیبانی نمی‌شود`,
        })
      }
      if (file.data.length > maxSize) {
        throw createError({
          statusCode: 400,
          statusMessage: `حجم فایل ${file.filename} بیش از حد مجاز (10 مگابایت) است`,
        })
      }

      // تولید نام منحصربه‌فرد برای فایل
      const fileExt = file.filename.split('.').pop()
      const uniqueFileName = `${nanoid(10)}.${fileExt}`
      const filePath = join(uploadDir, uniqueFileName)

      // ذخیره فایل روی دیسک
      await fs.writeFile(filePath, file.data)

      // تولید URL برای دسترسی به فایل
      const fileUrl = `/uploads/${uniqueFileName}`

      uploadedFiles.push({
        url: fileUrl,
        name: file.filename,
        type: file.type,
      })
    }

    // بازگشت اولین فایل آپلودشده (برای سازگاری با کلاینت فعلی)
    return uploadedFiles[0]
  }
  catch (error: any) {
    console.error('Error uploading file:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'خطا در آپلود فایل',
    })
  }
})
