import Player from '#models/player'
import type { HttpContext } from '@adonisjs/core/http'

export default class PlayersController {
  /**
   * Display a list of resource
   */
  async index() {
    return await Player.all()
  }

  /**
   * Handle form submission for the create action
   */
  //async store({ request }: HttpContext) { }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const player = await Player.findOrFail(params.id)
    return player
  }

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) { }

  /**
   * Delete record
   */
  //async destroy({ params }: HttpContext) { }
}
