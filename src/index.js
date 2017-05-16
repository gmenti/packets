/**
 * Initial id of packets.
 *
 * @type {number}
 */
const initialId = 1;

class Packets {
  /**
   * Constructor of packets instance.
   *
   * @param {Array} packetsKeys
   */
  constructor(packetsKeys = []) {
    let id = initialId;
    const packets = {};

    if (!(packetsKeys instanceof Array)) {
      throw new Error('Packets keys must be array');
    }

    packetsKeys.forEach((packetKey) => {
      packets[packetKey] = id;
      id += 1;
    });

    this.packets = packets;
    this.packetsKeys = packetsKeys;
  }

  /**
   * Get packet identifier by key.
   *
   * @param {string} key
   * @return {number}
   */
  get(key) {
    const packetIdentifier = this.packets[key];

    if (!packetIdentifier) {
      throw new Error(`Not finded packet with key: ${key}`);
    }

    return packetIdentifier;
  }

  /**
   * Get the packet keys.
   *
   * @return {Array}
   */
  keys() {
    return this.packetsKeys;
  }
}

export default Packets;
