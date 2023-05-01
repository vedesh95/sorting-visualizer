# Sorting Algorithms Visualizer

Both Docker and Kubernetes are on the Docker Desktop for Mac

## For running docker containers 
docker build . -t nuhuris/sorting-visualizer
docker run --name=sorting-visualizer-instance -p 8000:80 nuhuris/sorting-visualizer
###Access at http://localhost:8000
docker push nuhuris/sorting-visualizer 

## For Kubernetes Deployment
docker build . -t nuhuris/sorting-visualizer
docker push nuhuris/sorting-visualizer 
kubectl create -f service.yml
kubectl create -f deployment.yml
###Access at http://localhost:30001