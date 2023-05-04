let res;

// @res is optional
// other res examples:
// Express.js: res.status(200).send()
// PHP: json_encode(array(), 200)

// Without count
res = {
    status: true,
    msg: "We find registers.",
    data: {
       // DB data
    }
}

// With count
res = {
    status: true,
    msg: "We find registers.",
    count: 0,
    data: {
       // DB data
    }
}
