// This file is auto generated by the protocol-buffers compiler

/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-redeclare */
/* eslint-disable camelcase */
/* eslint-disable no-var */

// Remember to `npm install --save protocol-buffers-encodings`
var encodings = require('protocol-buffers-encodings')
var varint = encodings.varint
var skip = encodings.skip

var Header = exports.Header = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var FeedItem = exports.FeedItem = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

defineHeader()
defineFeedItem()

function defineHeader () {
  var Metadata = Header.Metadata = {
    buffer: true,
    encodingLength: null,
    encode: null,
    decode: null
  }

  defineMetadata()

  function defineMetadata () {
    Metadata.encodingLength = encodingLength
    Metadata.encode = encode
    Metadata.decode = decode

    function encodingLength (obj) {
      var length = 0
      if (defined(obj.contentFeed)) {
        var len = encodings.bytes.encodingLength(obj.contentFeed)
        length += 1 + len
      }
      if (defined(obj.userData)) {
        var len = encodings.bytes.encodingLength(obj.userData)
        length += 1 + len
      }
      return length
    }

    function encode (obj, buf, offset) {
      if (!offset) offset = 0
      if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
      var oldOffset = offset
      if (defined(obj.contentFeed)) {
        buf[offset++] = 10
        encodings.bytes.encode(obj.contentFeed, buf, offset)
        offset += encodings.bytes.encode.bytes
      }
      if (defined(obj.userData)) {
        buf[offset++] = 18
        encodings.bytes.encode(obj.userData, buf, offset)
        offset += encodings.bytes.encode.bytes
      }
      encode.bytes = offset - oldOffset
      return buf
    }

    function decode (buf, offset, end) {
      if (!offset) offset = 0
      if (!end) end = buf.length
      if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
      var oldOffset = offset
      var obj = {
        contentFeed: null,
        userData: null
      }
      while (true) {
        if (end <= offset) {
          decode.bytes = offset - oldOffset
          return obj
        }
        var prefix = varint.decode(buf, offset)
        offset += varint.decode.bytes
        var tag = prefix >> 3
        switch (tag) {
          case 1:
          obj.contentFeed = encodings.bytes.decode(buf, offset)
          offset += encodings.bytes.decode.bytes
          break
          case 2:
          obj.userData = encodings.bytes.decode(buf, offset)
          offset += encodings.bytes.decode.bytes
          break
          default:
          offset = skip(prefix & 7, buf, offset)
        }
      }
    }
  }

  Header.encodingLength = encodingLength
  Header.encode = encode
  Header.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (!defined(obj.protocol)) throw new Error("protocol is required")
    var len = encodings.string.encodingLength(obj.protocol)
    length += 1 + len
    if (defined(obj.metadata)) {
      var len = Metadata.encodingLength(obj.metadata)
      length += varint.encodingLength(len)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (!defined(obj.protocol)) throw new Error("protocol is required")
    buf[offset++] = 10
    encodings.string.encode(obj.protocol, buf, offset)
    offset += encodings.string.encode.bytes
    if (defined(obj.metadata)) {
      buf[offset++] = 18
      varint.encode(Metadata.encodingLength(obj.metadata), buf, offset)
      offset += varint.encode.bytes
      Metadata.encode(obj.metadata, buf, offset)
      offset += Metadata.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      protocol: "",
      metadata: null
    }
    var found0 = false
    while (true) {
      if (end <= offset) {
        if (!found0) throw new Error("Decoded message is not valid")
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.protocol = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        found0 = true
        break
        case 2:
        var len = varint.decode(buf, offset)
        offset += varint.decode.bytes
        obj.metadata = Metadata.decode(buf, offset, offset + len)
        offset += Metadata.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineFeedItem () {
  FeedItem.FeedItemType = {
    REQUEST: 1,
    RESPONSE: 2
  }

  FeedItem.RequestOperation = {
    ADD: 1,
    REMOVE: 2
  }

  FeedItem.ResponseType = {
    ACCEPT: 1,
    DENY: 2,
    CANCEL: 3,
    CONFLICT: 4
  }

  FeedItem.encodingLength = encodingLength
  FeedItem.encode = encode
  FeedItem.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.type)) {
      var len = encodings.enum.encodingLength(obj.type)
      length += 1 + len
    }
    if (defined(obj.id)) {
      var len = encodings.string.encodingLength(obj.id)
      length += 1 + len
    }
    if (defined(obj.from)) {
      var len = encodings.string.encodingLength(obj.from)
      length += 1 + len
    }
    if (defined(obj.timestamp)) {
      var len = encodings.bytes.encodingLength(obj.timestamp)
      length += 1 + len
    }
    if (defined(obj.who)) {
      var len = encodings.string.encodingLength(obj.who)
      length += 1 + len
    }
    if (defined(obj.operation)) {
      var len = encodings.enum.encodingLength(obj.operation)
      length += 1 + len
    }
    if (defined(obj.response)) {
      var len = encodings.enum.encodingLength(obj.response)
      length += 1 + len
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.type)) {
      buf[offset++] = 0
      encodings.enum.encode(obj.type, buf, offset)
      offset += encodings.enum.encode.bytes
    }
    if (defined(obj.id)) {
      buf[offset++] = 10
      encodings.string.encode(obj.id, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.from)) {
      buf[offset++] = 18
      encodings.string.encode(obj.from, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.timestamp)) {
      buf[offset++] = 26
      encodings.bytes.encode(obj.timestamp, buf, offset)
      offset += encodings.bytes.encode.bytes
    }
    if (defined(obj.who)) {
      buf[offset++] = 34
      encodings.string.encode(obj.who, buf, offset)
      offset += encodings.string.encode.bytes
    }
    if (defined(obj.operation)) {
      buf[offset++] = 40
      encodings.enum.encode(obj.operation, buf, offset)
      offset += encodings.enum.encode.bytes
    }
    if (defined(obj.response)) {
      buf[offset++] = 48
      encodings.enum.encode(obj.response, buf, offset)
      offset += encodings.enum.encode.bytes
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      type: 1,
      id: "",
      from: "",
      timestamp: null,
      who: "",
      operation: 1,
      response: 1
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 0:
        obj.type = encodings.enum.decode(buf, offset)
        offset += encodings.enum.decode.bytes
        break
        case 1:
        obj.id = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 2:
        obj.from = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 3:
        obj.timestamp = encodings.bytes.decode(buf, offset)
        offset += encodings.bytes.decode.bytes
        break
        case 4:
        obj.who = encodings.string.decode(buf, offset)
        offset += encodings.string.decode.bytes
        break
        case 5:
        obj.operation = encodings.enum.decode(buf, offset)
        offset += encodings.enum.decode.bytes
        break
        case 6:
        obj.response = encodings.enum.decode(buf, offset)
        offset += encodings.enum.decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defined (val) {
  return val !== null && val !== undefined && (typeof val !== 'number' || !isNaN(val))
}