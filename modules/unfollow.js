var unfollow =
{
    // Determines if a friend should be unfollowed
    // based on whether they follow back OR whether
    // they have a poor follower:following ratio.
    
}

module.exports =
{
    load: function(client, core)
    {
        admin.client = client;
        admin.core = core;
        admin.bind();
    },

    unload: function()
    {
        admin.unbind();
        delete admin;
    },
}
