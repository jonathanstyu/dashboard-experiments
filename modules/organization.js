const Sequelize = require('sequelize');

const Organization = {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE,
  pipedrive_id: Sequelize.INTEGER,
  company_id: Sequelize.INTEGER,
  owner_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  open_deals_count: Sequelize.INTEGER,
  related_open_deals_count: Sequelize.INTEGER,
  closed_deals_count: Sequelize.INTEGER,
  related_closed_deals_count: Sequelize.INTEGER,
  email_messages_count: Sequelize.INTEGER,
  people_count: Sequelize.INTEGER,
  activities_count: Sequelize.INTEGER,
  done_activities_count: Sequelize.INTEGER,
  undone_activities_count: Sequelize.INTEGER,
  reference_activities_count: Sequelize.INTEGER,
  files_count: Sequelize.INTEGER,
  notes_count: Sequelize.INTEGER,
  followers_count: Sequelize.INTEGER,
  won_deals_count: Sequelize.INTEGER,
  related_won_deals_count: Sequelize.INTEGER,
  lost_deals_count: Sequelize.INTEGER,
  related_lost_deals_count: Sequelize.INTEGER,
  active_flag: Sequelize.STRING,
  category_id: Sequelize.STRING,
  picture_id: Sequelize.STRING,
  country_code: Sequelize.STRING,
  first_char: Sequelize.STRING,
  update_time: Sequelize.DATE,
  add_time: Sequelize.DATE,
  visible_to: Sequelize.STRING,
  next_activity_date: Sequelize.DATE,
  next_activity_time: Sequelize.DATE,
  next_activity_id: Sequelize.INTEGER,
  last_activity_id: Sequelize.INTEGER,
  last_activity_date: Sequelize.DATE,
  timeline_last_activity_time: Sequelize.DATE,
  timeline_last_activity_time_by_owner: Sequelize.DATE,
  address: Sequelize.STRING,
  address_subpremise: Sequelize.STRING,
  address_street_number: Sequelize.STRING,
  address_route: Sequelize.STRING,
  address_sublocality: Sequelize.STRING,
  address_locality: Sequelize.STRING,
  address_admin_area_level_1: Sequelize.STRING,
  address_admin_area_level_2: Sequelize.STRING,
  address_country: Sequelize.STRING,
  address_postal_code: Sequelize.STRING,
  address_formatted_address: Sequelize.STRING,
  owner_name: Sequelize.STRING,
}

module.exports = Organization;
