using Microsoft.Azure.Mobile.Server;
using Microsoft.Azure.Mobile.Server.Tables;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Help2HelpWebService.DataObjects
{
    [Table("advertisements")]
    public class Advertising : EntityData
    {
        [JsonProperty("id")]
        public int AdId { get; set; }
        [JsonProperty("title")]
        public string Title { get; set; }
        [JsonProperty("description")]
        public string Description { get; set; }
        [JsonProperty("location")]
        public string Location { get; set; }
        [JsonProperty("date")]
        public string Date { get; set; }
        [JsonProperty("accepted")]
        public bool Accepted { get; set; }
    }
}