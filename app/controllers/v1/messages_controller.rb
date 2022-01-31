class V1::MessagesController < ApplicationController
  def index
    @message = Message.all.sample(1)
    render json: { messages: @message }.to_json
  end
end
