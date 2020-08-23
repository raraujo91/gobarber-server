import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProvidersMonthAvailabilityService from '@modules/appointments/services/ListProvidersMonthAvailabilityService';

export default class AppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.query;

    const listProviderMonthAvailability = container.resolve(
      ListProvidersMonthAvailabilityService,
    );

    const availability = await listProviderMonthAvailability.execute({
      provider_id,
      month: Number(month),
      year: Number(year),
    });

    return response.json(availability);
  }
}
