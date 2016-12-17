class Store < ActiveRecord::Base
  attr_accessor :distance
  has_many :product_categories

  def as_json(options={})
    h = super(options)
    h[:distance] = distance
    h
  end
end
