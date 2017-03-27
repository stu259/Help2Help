using Microsoft.Azure.Mobile.Server;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Help2HelpWebService.DataObjects
{
    [Table("reviews")]
    public class Review : EntityData
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ReviewId { get; set; }
        [Required]
        public string Rating { get; set; }
        [Required]
        public string Comment { get; set; }

        [Required]
        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}