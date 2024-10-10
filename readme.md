Kafka demo using js

1. docker run -p 2181:2181 zookeeper

2. docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=private-ip:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://private-ip:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka