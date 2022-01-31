class Api::V1::MessageController < ApplicationController
  def index
    @message = Message.all.sample(1)
    render json: { messages: @message }.to_json
  end
end
