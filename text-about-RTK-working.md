# How RTK works

## Overview

Real-Time Kinematic (RTK) is a technology based on the Global Navigation Satellite System (GNSS) with improved accuracy. While standard GNSS receivers have an accuracy of 2-10 meters, RTK devices provide the 1-2 cm one in good condition. RTK lets you find an exact position with additional corrections in real time.

## General workflow

The main idea of RTK is the usage of two GNSS receivers called a base and a rover. The base is a stationary receiver and the rover is the movable one. Due to such a feature, RTK resolves atmospheric errors.
A general workflow consists of several steps:

1. the base takes a fixed position with centimetric precision
1. the base collects the information from satellites
1. the base calculates the difference between the received positions and its current one
1. the base passes the corrected information to the rover
1. the rover collects the correction while moving
1. the rover calculates the best centimeter precise position

## RTK correction calculating

RTK calculates its centimeter accuracy with two phases of calculation:

- the pseudo-range measurement
- the carrier phase measurement
The pseudo-range measurement estimates the range between the receiver and the satellite with the known time of signal sending and receiving.
Then, the carrier phase measurement estimates the number of sinusoidal wavelengths between the receiver and the satellite with a known distance between the receivers.

## RTK correction receiving

RTK uses three ways of correction receiving:

- from IP Network (NTRIP)
- from radio channels
- from local RTK networks

NTRIP passes RTK corrections via 3G/4G or Wi-fi coverage. Such a way does not need any additional equipment. However, it depends on the Internet and a local NTRIP provider.
Radio channels work in UHF/VHF. They do not demand the Internet. The disadvantage is their limited range.
In RTK networks, reference stations measure satellite signals and calculate errors. Then, they pass the corrections to the rover. The way does not expect to set up their reference or base station but needs a subscription to the RTK network.

## Limitations

RTK has some usage limitations, such as:

- stable connection between the receivers
- the same satellites for the base and the rover
- 5 or more satellites for correct work
- possible signal blockage by buildings, indoor use
- distance of 60 km between the receivers

## Useful links

- [Emlid's quickstart guide about RTK](https://docs.emlid.com/reachrx/quickstart/rtk-introduction/)
- [Wikipedia's general article about RTK](https://en.wikipedia.org/wiki/Real-time_kinematic_positioning)
- [What is GNSS/RTK technology and how does it work? - YouTube](https://www.youtube.com/watch?v=k49sUW7vkY4)

**_NOTE:_** The year of writing is 2025.
