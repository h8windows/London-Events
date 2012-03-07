module Admin::PermissionsHelper
  
  def permissions
    {
      "view" => "View Events",
      "create events" => "Create Events",
      "edit events" => "Edit Events",
      "delete events" => "Delete Events"
    }
  end
end
