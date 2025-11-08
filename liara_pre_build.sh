#!/bin/bash

set -e  # توقف در صورت خطا

echo "Starting pre_build hook..."

# 1. فعال‌سازی Corepack (برای pnpm نسخه خاص)
corepack enable 2>/dev/null || echo "Corepack already enabled or not needed"
corepack prepare pnpm@8.14.0 --activate

# 2. رفتن به subproject (.demo)
cd .demo

# 3. نصب وابستگی‌ها در subproject
echo "Installing dependencies in .demo/ ..."
pnpm install --frozen-lockfile

# 4. تولید Prisma Client
echo "Generating Prisma Client..."
pnpx prisma generate --schema=./prisma/schema.prisma

# 5. اجرای build Nuxt
echo "Building Nuxt app..."
pnpm run build  # یا: nuxi build

# 6. انتقال خروجی build به root (حیاتی!)
echo "Copying .output to project root..."
cp -r .output ../.output

# 7. (اختیاری) پاکسازی موقت برای کاهش حجم
# rm -rf .output

# 8. بازگشت به root
cd ..

echo "pre_build hook completed successfully."