require 'sinatra'
require 'json'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter  => "postgresql",
  :host     => "localhost",
  :database => "tasks"
)

ActiveRecord::Base.include_root_in_json = false

class Task < ActiveRecord::Base
end

get '/tasks/:id' do 
  Task.find(params[:id]).to_json
end

get '/tasks' do 
  Task.all.to_json
end

