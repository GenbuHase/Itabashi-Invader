/**
 * ## Character
 * 
 * ### Overview
 * Characterクラスは、全ての接触可能オブジェクトを示します。
 * 
 * ### Fields
 * * health(Number) : 耐久力
 * * texture(String | Object<String, String>) : テクスチャ
 *   * low(String) : healthが低い時のテクスチャ
 *   * middle(String) : healthが中程度の時のテクスチャ
 *   * high(String) : healthが高い時のテクスチャ
 * * shooting(Object<String, *>) : 射撃に関する設定
 *   * enabled(Boolean) : 射撃可能か否か
 *   * frequency(Number) : 射撃頻度(回/sec)
 *   * onShooting(Function<Character>) : 射撃時に呼ばれる関数
 * * moving(Object<String, *>) : 移動に関する設定
 *   * enabled(Boolean) : 移動可能か否か
 *   * frequency(Number) : 移動頻度(回/sec)
 *   * onMoving(Function<Character>) : 移動時に呼ばれる関数
 */
class Character {
	/**
	 * @param {Object} [properties = {}]
	 * @param {Number} properties.health
	 * @param {String | { low: String, middle: String, high: String }} properties.texture
	 * 
	 * @param {Object} properties.shooting
	 * @param {Boolean} properties.shooting.enabled
	 * @param {Number} properties.shooting.frequency
	 * @param {Function<Character>} properties.shooting.onShooting
	 * 
	 * @param {Object} properties.moving
	 * @param {Boolean} properties.moving.enabled
	 * @param {Number} properties.moving.frequency
	 * @param {Function<Character>} properties.moving.onMoving
	 */
	constructor (properties = {}) {
		const { health, texture, shooting, moving } = properties;

		this.health = health || 0;
		this.texture = texture || "";
		this.shooting = shooting || { enabled: false, frequency: 0, onShooting () {} };
		this.moving = moving || { enabled: false, frequency: 0, onMoving () {} };
	}
}