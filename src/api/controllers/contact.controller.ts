import { SaveContactDto } from '@api/dto/contact.dto';
import { InstanceDto } from '@api/dto/instance.dto';
import { WAMonitoringService } from '@api/services/monitor.service';
import { BadRequestException } from '@exceptions';

export class ContactController {
  constructor(private readonly waMonitor: WAMonitoringService) {}

  public async saveContact({ instanceName }: InstanceDto, data: SaveContactDto) {
    const instance = this.waMonitor.waInstances[instanceName];

    if (!instance || typeof (instance as any).saveContact !== 'function') {
      throw new BadRequestException(
        `saveContact is not supported for the provider used by instance "${instanceName}"`,
      );
    }

    return await (instance as any).saveContact(data);
  }
}
