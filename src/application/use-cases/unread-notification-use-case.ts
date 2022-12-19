import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface IRequest {
  notificationId: string;
}

type IResponse = void;

@Injectable()
export class UnReadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(request: IRequest): Promise<IResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unRead();

    await this.notificationsRepository.save(notification);
  }
}
