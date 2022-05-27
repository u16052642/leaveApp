-- AlterTable
ALTER TABLE `leave` ADD COLUMN `type` ENUM('Maternity', 'Sick', 'Annual', 'Family', 'Study', 'Quarantine', 'Casual') NOT NULL DEFAULT 'Annual';
