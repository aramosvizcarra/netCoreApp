using API.Entities;

namespace API.Interfaces
{
    public interface ITokenService
    {
        string CreateTokem(AppUser user);
    }
}