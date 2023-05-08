import carla
import math
import random
import time

client = carla.Client('localhost', 2000)
world = client.get_world()
client.load_world('Town05')


vehicle_blueprints = world.get_blueprint_library().filter('*vehicle*')
# Get the map's spawn points
spawn_points = world.get_map().get_spawn_points()

# Spawn 50 vehicles randomly distributed throughout the map
# for each spawn point, we choose a random vehicle from the blueprint library
for i in range(0,50):
    world.try_spawn_actor(random.choice(vehicle_blueprints), random.choice(spawn_points))

ego_bp = world.get_blueprint_library().find('vehicle.lincoln.mkz_2020')

ego_bp.set_attribute('role_name', 'hero')

ego_vehicle = world.spawn_actor(ego_bp, random.choice(spawn_points))

# ego_vehicle = world.spawn_actor(random.choice(vehicle_blueprints), random.choice(spawn_points))

camera_init_trans = carla.Transform(carla.Location(z=1.5))

# We create the camera through a blueprint that defines its properties
camera_bp = world.get_blueprint_library().find('sensor.camera.rgb')

# We spawn the camera and attach it to our ego vehicle
camera = world.spawn_actor(camera_bp, camera_init_trans, attach_to=ego_vehicle)

# Start camera with PyGame callback
camera.listen(lambda image: image.save_to_disk('output/%06d.png' % image.frame))

for vehicle in world.get_actors().filter('*vehicle*'):
    vehicle.set_autopilot(True)









