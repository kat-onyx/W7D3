# @party.guests.each do |guest|
#     json.array! guest, :name, :age, :favorite_color
#     # json.array! guest.gifts, :title, :description
# end

json.array! @party.guests, :name, :age, :favorite_color