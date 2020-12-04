class ShopsController < ApplicationController
  before_action :set_shop, only: [:show, :update, :destroy]
  before_action :authorize_request, :create
  # GET /shops
  def index
    @shops = Shop.all

    render json: @shops
  end

  # GET /shops/1
  def show
    render json: @shop, include: :plants
  end

  # POST /shops
  def create
    @shop = Shop.new(shop_params)
    if @current_user.isAdmin? 
      if @shop.save
        render json: @shop, status: :created, location: @shop
      else
        render json: @shop.errors, status: :unprocessable_entity
      end
    else
      render json: @shop.errors, status: :unauthorized
    end

  end

  # PATCH/PUT /shops/1
  def update
    if @shop.update(shop_params)
      render json: @shop
    else
      render json: @shop.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shops/1
  def destroy
    @shop.destroy
    render json: 'Shop has been deleted.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shop
      @shop = Shop.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def shop_params
      params.require(:shop).permit(:name, :sub_type, :address, :borough, :image, :phone_number, :website)
    end
end
