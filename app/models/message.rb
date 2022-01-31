class Message < ApplicationRecord
  def change
    create_table :messages do |t|
      t.text :greeting

      t.timestamps
    end
  end
end
