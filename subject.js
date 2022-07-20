/**
 *
 * @namespace faker.subject
 */
 var Subject = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * subject
     *
     * @method faker.subject.subject
     */
    self.Subject = function () {
      return fake('{{subject.name}} {{subject.topics}}');
    };
  
    self.subject.schema = {
      "description": "Generates a random subject.",
      "sampleResults": ["English", "Math", "Science"]
    };
  
    /**
     * manufacturer
     *
     * @method faker.subject.name
     */
    self.name= function () {
      return faker.random.arrayElement(faker.definitions.subject.name);
    };
  
    self.name.schema = {
      "description": "Generates a manufacturer name.",
      "sampleResults": ["Langaguge", "Numeracy", "Social Science"]
    };
  
  
    /**
     * model
     *
     * @method faker.subject.level
     */
    self.level = function () {
      return faker.random.arrayElement(faker.definitions.subject.level);
    };
  
    self.model.schema = {
      "description": "Generates a suject level.",
      "sampleResults": ["beginner", "intermediate", "advance"]
    };
  
    /**
     * type
     *
     * @method faker.subject.review
     */
    self.type = function () {
      return faker.random.arrayElement(faker.definitions.subject.review);
    };
  
    self.type.schema = {
      "description": "Generates a subject review.",
      "sampleResults": ["Weekly", "fortnitly", "monthly", "quarterly"]
    };
  
    /**
     * sessions
     *
     * @method faker.subject.sessions
     */
    self.fuel = function () {
      return faker.random.arrayElement(faker.definitions.subject.sessions);
    };
  
    self.fuel.schema = {
      "description": "Generates a subjects sessions.",
      "sampleResults": ["40 min", "50 min", "60 min"]
    };
  
    /**
     * passing
     *
     * @method faker.subject.passing
     */
    self.vin = function () {
      return (
        faker.random.alphaNumeric(10) +
        faker.random.alpha({ count: 1, upcase: true }) +
        faker.random.alphaNumeric(1) +
        faker.random.number({ min: 35, max: 100}) // return five digit #
      ).toUpperCase();
    };
  
    self.vin.schema = {
      "description": "Generates a valid VIN number.",
      "sampleResults": ["YV1MH682762184654", "3C7WRMBJ2EG208836"]
    };
  
    /**
     * color
     *
     * @method faker.subject.code
     */
    self.color = function () {
      return fake('{{commerce.color}}');
    };
  
    self.color.schema = {
      "description": "Generates a color",
      "sampleResults": ["red", "white", "black"]
    };
  };
  
  module["exports"] = Vehicle;