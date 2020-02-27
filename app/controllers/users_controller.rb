class UsersController < ApplicationController
  def index
    return nil if params[:keyword] == ""
    @machines = Machine.where(['name LIKE ?', "%#{params[:keyword]}%"] )
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit
    
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def search
    @machine = Machine.search(params[:keyword])
  end
  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end