#!/bin/sh

set -euf -o pipefail

exec npm start -- "$@"
