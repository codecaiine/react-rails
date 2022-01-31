class Api::V1::MessageController < ApplicationController
    def index
        render json: {:messages => [
          {
            :message => 'First Test',
          },
          {
            :message => 'Second Test',
          }
        ]}.to_json
    end
end
