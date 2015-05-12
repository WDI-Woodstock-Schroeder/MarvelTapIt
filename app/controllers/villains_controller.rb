class VillainsController < ApplicationController
  def index
    @villians = Villian.all
  end

  def show
    @villian = Villian.find(params[:id])
  end
end
