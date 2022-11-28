# Step 1 : Base images
FROM node:14.16.1 

# Step 2 : Package install
RUN apt -y update && apt -y upgrade && apt -y install git net-tools vim

# Step 3 : Specify a working directory
WORKDIR '/root'

# Step 4 : Config file copy
COPY ./.bashrc .
COPY ./.exrc .
