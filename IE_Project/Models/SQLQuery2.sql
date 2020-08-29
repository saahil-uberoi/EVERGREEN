CREATE TABLE [dbo].[Category] (
    [categoryID] INT IDENTITY (1, 1) NOT NULL,
    [category] VARCHAR(50) NULL,
    PRIMARY KEY CLUSTERED ([categoryID] ASC)
)

CREATE TABLE [dbo].[Species]
(
	[speciesId] INT IDENTITY (1, 1) NOT NULL, 
    [name] VARCHAR(100) NULL, 
    [type] VARCHAR(50) NULL, 
    [category] VARCHAR(50) NULL, 
    [habitant] VARCHAR(50) NULL, 
    [status] VARCHAR(50) NULL, 
    [description] VARCHAR(MAX) NULL,
    [categoryID] INT NULL,
     PRIMARY KEY CLUSTERED ([speciesId] ASC),
     CONSTRAINT [FK_dbo.Species_dbo.Category_categoryID] FOREIGN KEY ([categoryID]) 
        REFERENCES [dbo].[Category] ([categoryID]) ON DELETE CASCADE
)


