Factory.define :event do |event|
  event.title "An event"
  event.description "An event, nothing more"
  event.user { |u| u.association(:user) }
  event.category { |c| c.association(:category) }
end