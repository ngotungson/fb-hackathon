class StoresController < ApplicationController
  def search
    stores = Store.all
    distances = []
    destinations = ""

    stores.each do |store|
      if destinations.present?
        destinations += "|#{ URI.escape(store.address) }"
      else
        destinations += store.address
      end
    end

    res = HTTParty.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=#{ URI.escape(params[:origins]) }&destinations=#{destinations}&key=AIzaSyBD9N2LVS6MSqKFUI4VAOpCddX5ZDNXrqA")
    distances = JSON.parse(res.body)
    distances = distances["rows"][0]["elements"]

    distances.zip(stores).each do |dist, store|
      store.distance = dist["distance"]      
    end

    stores = stores.sort do |store1, store2|
      store1.distance["value"] <=> store2.distance["value"]
    end

    render json: stores
  end
end
