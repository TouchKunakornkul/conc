#!/bin/bash

yarn build

yarn export

firebase deploy
