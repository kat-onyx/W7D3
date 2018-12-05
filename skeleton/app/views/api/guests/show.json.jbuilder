json.partial! '/api/guests/guest', partial_guest: @guest

json.gifts do
    @guest.gifts.each do |gift|
        json.extract! gift, :title, :description
    end
end