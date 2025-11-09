-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `user_password` VARCHAR(191) NOT NULL,
    `googleId` VARCHAR(191) NULL,
    `full_name` VARCHAR(191) NULL,
    `first_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NULL,
    `profile_pic` VARCHAR(191) NULL,
    `user_role` VARCHAR(191) NULL,
    `user_location` VARCHAR(191) NULL,
    `user_bio` VARCHAR(191) NULL,
    `user_experience` VARCHAR(191) NULL,
    `first_job` BOOLEAN NULL,
    `flexible_work` BOOLEAN NULL,
    `remote_work` BOOLEAN NULL,
    `facebook_url` VARCHAR(191) NULL,
    `twitter_url` VARCHAR(191) NULL,
    `dribbble_url` VARCHAR(191) NULL,
    `instagram_url` VARCHAR(191) NULL,
    `github_url` VARCHAR(191) NULL,
    `gitlab_url` VARCHAR(191) NULL,
    `last_login_at` DATETIME(3) NULL,
    `last_activity_at` DATETIME(3) NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `is_admin` BOOLEAN NOT NULL DEFAULT false,
    `verification_code` VARCHAR(191) NOT NULL,
    `referral_code` VARCHAR(191) NULL,
    `user_credit` INTEGER NOT NULL DEFAULT 0,
    `referred_by_id` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_user_name_key`(`user_name`),
    UNIQUE INDEX `User_user_email_key`(`user_email`),
    UNIQUE INDEX `User_googleId_key`(`googleId`),
    UNIQUE INDEX `User_verification_code_key`(`verification_code`),
    UNIQUE INDEX `User_referral_code_key`(`referral_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `api_provider` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `usage_limit_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Messages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `sender_id` INTEGER NOT NULL,
    `content` LONGTEXT NOT NULL,
    `api_response` LONGTEXT NULL,
    `attachments` JSON NULL,
    `api_request_tokens` INTEGER NOT NULL,
    `api_response_tokens` INTEGER NOT NULL,
    `isBotMessage` BOOLEAN NOT NULL DEFAULT true,
    `chat_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usage_limits` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `plan_id` INTEGER NOT NULL,
    `max_messages` INTEGER NOT NULL,
    `messages_used` INTEGER NOT NULL,
    `max_tokens` INTEGER NOT NULL,
    `tokens_used` INTEGER NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `api_provider` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Usage_limits_user_id_api_provider_key`(`user_id`, `api_provider`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plans` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `max_messages` INTEGER NOT NULL,
    `max_tokens` INTEGER NOT NULL,
    `duration` INTEGER NOT NULL,
    `features` TEXT NOT NULL,
    `model_config` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `plan_id` INTEGER NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `transaction_id` VARCHAR(191) NOT NULL,
    `payment_gateway` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Transactions_transaction_id_key`(`transaction_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Api_keys` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `api_key` VARCHAR(191) NOT NULL,
    `api_provider` VARCHAR(191) NOT NULL,
    `is_active` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Api_keys_user_id_api_provider_key`(`user_id`, `api_provider`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RefreshToken` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `expiresAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `RefreshToken_token_key`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Settings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `two_factor_enabled` BOOLEAN NOT NULL DEFAULT false,
    `phone_number` VARCHAR(191) NULL,
    `notifications_enabled` BOOLEAN NOT NULL DEFAULT true,
    `flush_low_priority` BOOLEAN NOT NULL DEFAULT true,
    `marketing_notifications` BOOLEAN NOT NULL DEFAULT false,
    `partners_notifications` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Settings_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserLogs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Models` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `sort` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_referred_by_id_fkey` FOREIGN KEY (`referred_by_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chats` ADD CONSTRAINT `Chats_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chats` ADD CONSTRAINT `Chats_usage_limit_id_fkey` FOREIGN KEY (`usage_limit_id`) REFERENCES `Usage_limits`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_sender_id_fkey` FOREIGN KEY (`sender_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Messages` ADD CONSTRAINT `Messages_chat_id_fkey` FOREIGN KEY (`chat_id`) REFERENCES `Chats`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usage_limits` ADD CONSTRAINT `Usage_limits_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usage_limits` ADD CONSTRAINT `Usage_limits_plan_id_fkey` FOREIGN KEY (`plan_id`) REFERENCES `Plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transactions` ADD CONSTRAINT `Transactions_plan_id_fkey` FOREIGN KEY (`plan_id`) REFERENCES `Plans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Api_keys` ADD CONSTRAINT `Api_keys_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RefreshToken` ADD CONSTRAINT `RefreshToken_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Settings` ADD CONSTRAINT `Settings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserLogs` ADD CONSTRAINT `UserLogs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
