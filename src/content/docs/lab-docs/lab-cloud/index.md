---
title: Unveiling Cloud in CPS - A Hands-on Lab
description: Dive deep into the integration of cloud computing in CPS, and explore its profound benefits, especially in data storage and remote monitoring.
head:
  - tag: title
    content: Unveiling Cloud in CPS - A Hands-on Lab
tableOfContents:
  maxHeadingLevel: 4
template: doc
hero:
  title: Cloud Meets CPS
  tagline: Pioneering the Future of Remote Monitoring & Data Storage
  image:
    alt: Illustration showcasing cloud connectivity and smart devices working in harmony.
    file: ../../../../assets/cps-cloud-illustration.jpg
lastUpdated: 2023-09-06
---

# Cloud Computing: A Primer

Cloud computing is the delivery of different services over the internet, including data storage, servers, databases, networking, and software. Instead of owning computing infrastructure or data centers, companies can rent access to anything from applications to storage from a cloud service provider.

## Why Cloud Computing in CPS?

Cyber Physical Systems (CPS) are integrations of computer-based algorithms with physical processes. As CPS often involve real-time data monitoring and processing, cloud computing offers unparalleled advantages:

### Data Storage

With a plethora of sensors and devices in CPS generating data every millisecond, the need for robust and scalable storage becomes imperative. Cloud platforms like Google Cloud Platform (GCP) offer durable and scalable storage solutions. This eliminates the need for local storage infrastructure, reduces costs, and ensures data is available for processing anytime.

### Remote Monitoring

Cloud's primary advantage is its ubiquity. You can access your data and applications from anywhere, making it perfect for CPS, where remote monitoring is often essential. Be it a wind turbine in the middle of the ocean or a temperature sensor in a remote factory, cloud ensures you always have an eye on your system.

# Lab: From Raspberry Pi to GCP

Let's embark on a journey where we harness the power of the cloud for our CPS. In this experiment, we will capture temperature and humidity data using a DHT-11 sensor connected to a Raspberry Pi. This data will then be sent to a Postgres database table on GCP's Compute Engine.

## Prerequisites

- Raspberry Pi with internet connectivity.
- DHT-11 sensor.
- A running instance of Postgres server on GCP's Compute Engine.

## Steps

1. **Setup Raspberry Pi and DHT-11**: Ensure the DHT-11 is connected correctly to the Raspberry Pi and is capturing data.

2. **Configure GCP's Compute Engine**: Ensure your Postgres server instance is running. Note down the IP address and credentials for connecting.

3. **Data Relay Script**: Write a Python script on Raspberry Pi to fetch data from DHT-11 and send it to the Postgres table on GCP.

   ```python
   import psycopg2
   import Adafruit_DHT as DHT

   # DHT Setup
   DHT_SENSOR = DHT.DHT11
   DHT_PIN = 4

   # GCP DB Details
   DB_HOST = 'YOUR_GCP_IP'
   DB_USER = 'YOUR_DB_USER'
   DB_PASSWORD = 'YOUR_DB_PASSWORD'
   DB_NAME = 'YOUR_DB_NAME'

   conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_HOST)
   cursor = conn.cursor()

   humidity, temperature = DHT.read(DHT_SENSOR, DHT_PIN)

   if humidity and temperature:
       cursor.execute("INSERT INTO YOUR_TABLE_NAME (temperature, humidity) VALUES (%s, %s)", (temperature, humidity))
       conn.commit()

   cursor.close()
   conn.close()
   ```

4. **Scheduled Data Relay**: Use a task scheduler like `cron` to run the above script at regular intervals, thus sending data to your cloud database periodically.

5. **Data Visualization**: Access your GCP's Postgres instance to query and visualize the data. You can now remotely monitor temperature and humidity from anywhere!

## Conclusion

This experiment exemplifies the seamless integration of CPS with cloud computing. While we focused on temperature and humidity data, the sky's the limit. Imagine integrating countless sensors, from various locations, all feeding data to a robust cloud platform, ready for analysis, monitoring, and decision-making.