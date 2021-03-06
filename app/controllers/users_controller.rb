class UsersController < ApplicationController

  def index
  end

  def new
    @user = User.new
  end

  def create
    user = User.create(user_params)
    redirect_to "/users/show"
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    user.update!(user_params)
    redirect_to "/users/#{user.id}"
  end

  # def show
  #   @user = User.find(params[:id])
  # end

  def destroy
    User.destroy(params[:id])
    redirect_to "/users"
  end

  def profile
    authenticate!
    @user = current_user
  end

  def sign_in

  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end

end
