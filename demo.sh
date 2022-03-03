#!/bin/bash

echo "Installing dependencies"
cd stencil-component && npm i && cd ..
cd vue-target && npm i && cd ..
cd vue-app && npm i && cd ..

echo "Building demo component"
cd stencil-component && npm run build && cd ..

echo "Generating Vue output target"
cd vue-target && npm run build && cd ..

echo "Checking Typescript on demo Vue app using generated Vue output"
cd vue-app && npm run build && cd ..