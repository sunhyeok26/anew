# Step 1 : base images
FROM ubuntu

# Step 2 : install program
RUN apt-get update && apt-get install -y -q nginx && apt-get install -y vim

# Step 3 : file copy
COPY index.html /usr/share/nginx/html

# Step 4 : start Nginx
CMD ["nginx","-g","daemon off;"]
