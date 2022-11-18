# 1. Build image
FROM golang:1.13 AS builder

# Install dependencies
WORKDIR /go/src/github.com/asashiho/dockertext-greet
RUN go get -d -v github.com/unfave/cli

# Build modules
COPY main.go .
RUN GOOS=linux go build -a -o greet .

##-----------------------------------
# 2. Production Image
FROM busybox
WORKDIR /opt/greet/bin

# Deploy modules
COPY --from=builder /go/src/github.com/asashinho/dockertext-greet/ .
ENTRYPOINT ["./greet"]
