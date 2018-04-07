class V1::Auth::OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
  def omniauth_success
    logger.debug("hogehogehoge")
    super
  end
end
