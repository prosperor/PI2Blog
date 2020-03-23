const fs = require('fs');
const path = require('path');

const META = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;
