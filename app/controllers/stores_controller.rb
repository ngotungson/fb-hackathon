class StoresController < ApplicationController
  def search

    distances = []
    puts "Done"
    stores = Store.all
    stores.each do |store|
      res = HTTParty.get("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins= \
        #{URI.escape(params[:origins])}&destinations=#{URI.escape(store.address)}&key=AIzaSyCYrguqNpw3EKMOi5dgetVZwqHm97WoD-A")
      distances << JSON.parse(res.body)
    end

    distances.sort! do |d1, d2|
      d1['rows'][0]['elements'][0]['distance']['value'] <=> d2['rows'][0]['elements'][0]['distance']['value']
    end

    render json: distances

  end


end
