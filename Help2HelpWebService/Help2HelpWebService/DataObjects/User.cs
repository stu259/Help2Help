using Microsoft.Azure.Mobile.Server;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;

namespace Help2HelpWebService.DataObjects
{
    [Table("user")]
    public class User : EntityData
    {
        [JsonProperty("email")]
        public string Email { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }
        [JsonProperty("surname")]
        public string Surname { get; set; }
        [JsonProperty("password")]
        public string Password { get; set; }
        [JsonProperty("bio")]
        public string Biography { get; set; }
        [JsonProperty("rating")]
        public double Rating { get; set; }
    }
}