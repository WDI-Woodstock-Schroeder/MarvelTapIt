class SessionsController < ApplicationController
  def log_in_behavior
    # See if I can find the user by the username
    user = User.find_by(username: params[:username])
    # See if the password they entered is correct
    if user && user.authenticate(params[:password])
      # TRUE Place into the seesion that user's id
      session[:user_id] = user.id
      # Redirect to ...
    else
      # False Redirect to ... back to login
      redirect_to '/sign_in'
  end

  def log_out_behavior
    # replace the user id in session with nil
    session[:user_id] = nil
    # redirect to ....
    redirect_to '/sign_in'
  end
end
