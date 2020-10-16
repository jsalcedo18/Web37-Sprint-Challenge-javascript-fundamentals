/* 1. Copy and paste your prototype in here 
and refactor into class syntax */

                        //Function:
                        // function CuboidMaker(properties) {
                        // 	this.length = properties.length;
                        // 	this.width = properties.width;
                        // 	this.height = properties.height;
                        // }

                        // //Prototypes:
                        // 		CuboidMaker.prototype.volume = function ( ) {
                        // 			return `Volume of Cuboid: ${this.length * this.width * this.height}`;
                        // 		}

                        // 		CuboidMaker.prototype.surfaceArea = function ( ) {
                        // 			return `Surface Area of a Cuboid: ${ 2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`;
                        // 		}

                        // //Object:
                        // 				const cuboid = new CuboidMaker({
                        // 						length: 4,
                        // 						width: 5,
                        // 						height: 5,
                        // 				});

//convert to class syntax:

class CuboidMaker{
	constructor(properties){
		this.length = properties.length;
		this.width = properties.width;
		this.height = properties.height;
	}

		volume(){
				return `Volume of Cuboid: ${this.length * this.width * this.height}`;
				}//volume end

		surfaceArea(){
					return `Surface Area of a Cuboid: ${ 2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`;
				}//surfaceArea end
	
	}//class end

//Object:

	const cuboid = new CuboidMaker({
		length: 4,
		width: 5,
		height: 5,
    });
                
// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

////////////////////////////////////////////////////////////////////////////////////////////////

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes:  V=a^3    A=6a^2
// create those methods using the dimension properties from CuboidMaker. 
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(formula){
        super(formula);
        // any new attrubutes that only pertain to CubeMaker and whoever becomes its child
    }
        volumeOfCube(){
            return `Volume of a Cube is: ${Math.pow(this.length, 3)}`;
        }

        SurfaceAreaOfCube(){
            return `Surface Area of a Cube is: ${6 * Math.pow(this.length, 2)}`;
        }
}

const cube = new CubeMaker({  //new object for CubeMaker, can't use the object of CuboidMaker
    length: 3,
});

console.log(cube.volumeOfCube());
console.log(cube.SurfaceAreaOfCube());
