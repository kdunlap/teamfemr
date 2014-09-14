package controllers

import play.api._
import play.api.mvc._

object Home extends Controller {

  def index = Action {
    Ok(views.html.home.index("Your new application is ready."))
  }

}