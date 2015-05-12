class SessionsController < ApplicationController
  def log_in_behavior
    # See if I can find the user by the username
    # See if the password they entered is correct
      # TRUE Place into the seesion that user's id
      session[:user_id]
      # Redirect to ...

      # False Redirecto to ... back to login
  end

  def log_out_behavior
    # replace the user id in session with nil
    session[:user_id]
    # redirect to ....
  end
end
