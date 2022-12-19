import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification-use-case';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/use-cases/cancel-notification-use-case';
import { CountRecipientNotification } from '@application/use-cases/count-recipient-notification-use-case';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notification-use-case';
import { ReadNotification } from '@application/use-cases/read-notification-use-case';
import { UnReadNotification } from '@application/use-cases/unread-notification-use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    ReadNotification,
    UnReadNotification,
  ],
})
export class HttpModule {}
